export interface sendOTPprops {
    email: string;
}

export interface singupLoginInitalState {
    isVerified: boolean;
    data: null;
    status: "idle" | "loading" | "success" | "failed";
    message: string;
}