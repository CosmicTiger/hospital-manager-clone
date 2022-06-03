/**
 * paths.js
 * @file A utility file for storing the collection paths in a modular
 * approach in this project.
 */

/**
 * @see See [What is Object.freeze?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
 * @see See [Why use Object.freeze?]()
 * @see See [Using enum with ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/enum)
 * @see See [Using Symbol in enum](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 * @readonly
 * @enum {object}
 * @const {object} PATHS_COLLECTIONS - This will going to collect as symbols all the possible routes
 * in the application and with concatenation the path for a route will be generated for React Router.
 */
const PATHS_COLLECTIONS = Object.freeze({
    PRIVATE_PATHS: {
        DASHBOARD_BASE_PATH: Symbol('app/'),
        USER_PATHS: {
            BASE_PATH: Symbol('user/'),
            USER_CONFIG: Symbol('config/'),
            RESET_PASSWORD: Symbol('reset-password/'),
        },
        EXAMPLE_PATHS: {
            CHARTS: Symbol('charts/'),
            TABLES: Symbol('tables/'),
        },
    },
    PUBLIC_PATHS: {
        BASE: Symbol('/'),
        SUCCESS: Symbol('success/'),
        FAILURE: Symbol('failure/'),
        USER_PATHS: {
            LOGIN: Symbol('login/'),
            REGISTER: Symbol('register/'),
            FORGOT_PASSWORD: Symbol('forgot-password/'),
        },
        CLIENT_ERRORS_PATHS: {
            NOT_FOUND: Symbol('*'),
            INTERNAL_SERVER_ERROR: Symbol('500/'),
        },
    },
})

export default PATHS_COLLECTIONS

