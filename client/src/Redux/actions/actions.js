import * as actions from './actionTypes'
// Users
export const SetUsers = function (users) {
    return {
        type: actions.SET_USERS,
        payload: { users }
    }
}
export const ResetUsers = function () {
    return { type: actions.RESET_USERS }
}
// Services
export const SetServices = function (services) {
    return {
        type: actions.SET_SERVICES,
        payload: { services }
    }
}
export const ResetServices = function () {
    return { type: actions.RESET_SERVICES }
}
// Tips And Tricks
export const SetTipAndTricks = function (tipsandtricks) {
    return {
        type: actions.SET_TIPS_AND_TRICKS,
        payload: { tipsandtricks }
    }
}
export const ResetTipsAndTricks = function () {
    return { type: actions.RESET_TIPS_AND_TRICKS }
}
// Feedback And Ratings
export const SetFeedbackAndRatings = function (rating_and_feedbacks) {
    return {
        type: actions.SET_FEEDBACK_AND_RATINGS,
        payload: { rating_and_feedbacks }
    }
}
export const ResetFeedbackAndRatings = function () {
    return {
        type: actions.RESET_FEEDBACK_AND_RATINGS
    }
}