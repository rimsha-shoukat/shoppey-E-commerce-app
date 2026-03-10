
async function logout(req, res) {
    try {
       return res
      .status(200)
      .clearCookie("token", { httpOnly: true })
      .json({ message: "User logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default logout;