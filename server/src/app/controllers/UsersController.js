require("dotenv").config();
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/User");
const UserPermissionResource = require("../models/UserPermissionResource");
const authService = require("../services/authService");
const constants = require("../constants");

class UsersController {
    // [POST] /users/register
    async register(req, res, next) {}

    // [POST] /users/login
    async login(req, res, next) {
        const data = req.body;
        if (validator.isAlphanumeric(data.userName) && validator.isLength(data.userName, { min: 3, max: 16 })) {
            await User.findOne({ userName: data.userName })
                .then(async (user) => {
                    if (user) {
                        bcrypt
                            .compare(data.password, user.password)
                            .then(async (isEqual) => {
                                if (isEqual) {
                                    console.log(user);
                                    const token = authService.generateAccessToken(
                                        { name: user.name },
                                        constants.EXPIRE_TIME_ACCESS_TOKEN.toString()
                                    );
                                    const refreshToken = authService.generateRefreshToken(
                                        { name: user.name },
                                        constants.EXPIRE_TIME_REFRESH_TOKEN.toString()
                                    );
                                    await UserPermissionResource.aggregate([
                                        {
                                            $match: {
                                                userID: user._id,
                                            },
                                        },
                                        {
                                            $lookup: {
                                                from: "resources",
                                                localField: "resourceID",
                                                foreignField: "id",
                                                as: "resource",
                                            },
                                        },
                                    ])

                                        .then((result) => {
                                            console.log(result);
                                            res.status(200).json({
                                                statusId: 0,
                                                message: "Correct!!!",
                                                token,
                                                refreshToken,
                                                data: {
                                                    id: user._id,
                                                    name: user.name,
                                                    avatar: user.avatar,
                                                    phone: user.phone,
                                                    address: user.address,
                                                },
                                                resource: result,
                                            });
                                        })
                                        .catch(() => res.status(400).json({ statusId: 2, message: "Error!!!" }));
                                } else {
                                    return res
                                        .status(200)
                                        .json({ statusId: 1, message: "Username or password is not true!!!" });
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                                return res.status(400).json({ statusId: 2, message: "Error!!!" });
                            });
                    } else {
                        return res.status(200).json({ statusId: 1, message: "Username or password is not true!!!" });
                    }
                })
                .catch(() => res.status(400).json({ statusId: 2, message: "Login failure!!!" }));
        } else res.status(200).json({ statusId: 1, message: "Username or password is not true!!!" });
    }

    // [GET] /users/
    async getAll(req, res, next) {
        const token = req.cookies.token;
        const user = req.cookies.resource;
        try {
            if (user) {
                jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                await User.find({})
                    .then((result) =>
                        res.status(200).json({ statusId: 0, message: "Created product successful!!!", data: result })
                    )
                    .catch(() => res.status(400).json({ statusId: 2, message: "Error!!!" }));
            } else {
                return res.status(400).json({ statusId: 2, message: "Error!!!" });
            }
        } catch (error) {
            return res.status(400).json({ statusId: 2, message: "Error!!!" });
        }
    }
}

module.exports = new UsersController();
