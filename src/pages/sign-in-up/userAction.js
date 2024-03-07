import { featchNewAccessJWT } from "../../helper/userAxios/userAxios"
import { setAUser } from "./userSlice"

export const fetchUserProfile = () => async (dispatch) => {
    const resp = await featchNewAccessJWT()
    if (resp?.user) {
        dispatch(setAUser(resp.user))
    }
}

export const autoLogin = () => async (dispatch) => {
    const refreshJWT = localStorage.getItem("refreshJWT")
    if (refreshJWT) {
        const token = await featchNewAccessJWT()
        if (token?.accessJWT) {
            sessionStorage.setItem('accessJWT', token.accessJWT)
            dispatch(fetchUserProfile())
        }
    }
}