"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const index_controller_2 = __importDefault(require("../controllers/index.controller"));
const router = (0, express_1.Router)();
router.route('/')
    .get(index_controller_1.Index)
    .post(index_controller_2.default.firts);
exports.default = router;
