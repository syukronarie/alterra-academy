import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchGetPostById, selectPost } from "../../store/postSlice";
import { convertUTCtoLocalDate } from "../../utils/convertUTCtoLocalDate";

export default function ProductDetailsPage() {
	const statePost = useSelector(selectPost);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchGetPostById(id));
	}, [dispatch, id]);

	console.log(statePost);

	return (
		<div>
			{statePost.status === "loading" && <p>Loading..</p>}
			{statePost.status === "success" && (
				<div className="articles_item">
					<img src={statePost.data.image} alt="article" />
					<p>{statePost.data.text}</p>
					<p>👍 {statePost.data.likes}</p>
					<p>
						Updated on{" "}
						{convertUTCtoLocalDate(new Date(statePost.data.publishDate))}
					</p>
				</div>
			)}
			{statePost.status === "failed" && (
				<div>
					<p>Something went wrong</p>
					<p>{statePost.message}</p>
				</div>
			)}
			<Link to="/">Back to home</Link>
		</div>
	);
}
