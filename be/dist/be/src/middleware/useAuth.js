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
exports.useAuth = void 0;
const sha256 = require("sha256");
const useHandleError_1 = require("./useHandleError");
function useAuth(hasFollowing = true) {
    return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
        const auth = ctx.headers.authorization;
        if (!auth)
            return (0, useHandleError_1.createError)({ status: 401, msg: '密码错误' });
        if (sha256(auth) !==
            '669dcf8df1213cfedddd7d32485e3fef8770a74d33046d85b1d50f0d3582131f') {
            return (0, useHandleError_1.createError)({ status: 401, msg: '密码错误' });
        }
        if (hasFollowing) {
            return yield next();
        }
        else {
            ctx.body = {
                status: 200,
                msg: 'ok',
                data: {}
            };
            return;
        }
    });
}
exports.useAuth = useAuth;
