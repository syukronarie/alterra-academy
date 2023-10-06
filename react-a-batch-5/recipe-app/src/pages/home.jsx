import React, { useEffect, useState } from "react";
import { APIRecipe } from "../apis/APIrecipe";
import { Button, Col, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import { APIPost } from "../apis/APIPost";

export function Home() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		APIRecipe.getRecipes().then(setRecipes);
		APIPost.getPosts({ limit: 10, page: 0 });
	}, []);

	return (
		<div>
			{recipes &&
				recipes.map((val) => (
					<Row key={val.id}>
						<Col>
							<h2>{val.title}</h2>
							{val.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
							<p>
								<b>Description: </b>
								{val.description}
							</p>
							<p>
								<b>Instructions: </b>
								{val.instructions}
							</p>
						</Col>
					</Row>
				))}
		</div>
	);
}
