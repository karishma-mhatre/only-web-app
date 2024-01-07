import React from "react"
import { AuthProvider  } from "./src/contexts/AuthProvider";

export const wrapRootElement = ({ element }) => {
    return <AuthProvider>{element}</AuthProvider>
};