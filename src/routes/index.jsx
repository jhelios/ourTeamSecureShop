import { BrowserRouter, Routes, Route } from "react-router-dom"
import { OurTeam } from "../pages/OurTeam"

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<OurTeam />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
