import { Input, Stack } from "@mui/material";
import React from "react";

export default function AddArticlePage() {
	return (
		<div>
			<form>
				<Stack gap={4}>
					<Input type="text" placeholder="description" />
					<Input type="number" placeholder="likes" />
					<Input type="file" placeholder="input image" />
				</Stack>
			</form>
		</div>
	);
}
