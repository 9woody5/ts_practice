//js파일에 대한 보호 장치를 추가하는 것. ts가 js를 확인함
//JSDoc - 코멘트로 이루어진 문법
// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
