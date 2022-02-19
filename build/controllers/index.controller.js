"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const pool = require('../database');
function Index(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.send('Welcome start API ');
    });
}
exports.Index = Index;
class querys {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield pool.query('SELECT * FROM posts');
                return res.json(posts[0]);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    firts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.send('this mi second route');
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
const Querys = new querys();
exports.default = Querys;
