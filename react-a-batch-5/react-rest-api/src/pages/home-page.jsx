import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPosts, selectPosts } from "../store/postsSlice";
import { convertUTCtoLocalDate } from "../utils/convertUTCtoLocalDate";
import { Button } from "@mui/material";

const limit = 5;

export default function HomePage() {
	const statePosts = useSelector(selectPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGetPosts({ limit, page: 0 }));
	}, [dispatch]);

	const totalPage =
		statePosts.status === "success"
			? Math.floor(statePosts.data.total / 10 - 1)
			: 0;

	const { page } =
		statePosts.status === "success" ? statePosts.data : { page: 0 };

	return (
		<div>
			{statePosts.status === "loading" && <p>Loading</p>}
			{statePosts.status === "success" && (
				<>
					<div className="articles">
						{statePosts.data.data.map((article) => (
							<div className="articles_item" key={article.id}>
								<Link to={`/articles/${article.id}`}>
									<h3>{article.text}</h3>
								</Link>
								<img src={article.image} alt={article.text} />
								<p>👍 {article.likes}</p>
								<p>
									Updated on{" "}
									{convertUTCtoLocalDate(new Date(article.publishDate))}
								</p>
							</div>
						))}
					</div>
					<div>
						<p>Current page: {page + 1}</p>
						<p>Total page: {totalPage}</p>
						{statePosts.data.page > 0 && (
							<Button
								onClick={() =>
									dispatch(fetchGetPosts({ limit, page: page - 1 }))
								}
							>
								Prev
							</Button>
						)}
						{statePosts.data.page !== totalPage && (
							<Button
								onClick={() =>
									dispatch(fetchGetPosts({ limit, page: page + 1 }))
								}
							>
								Next
							</Button>
						)}
					</div>
				</>
			)}
			{statePosts.status === "failed" && (
				<div>
					<p>Something went wrong</p>
					<p>{statePosts.message}</p>
				</div>
			)}

			<Link to="/contact-us">Contact Us</Link>
		</div>
	);
}
