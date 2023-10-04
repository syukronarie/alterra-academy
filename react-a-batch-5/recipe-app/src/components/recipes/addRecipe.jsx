import { Button, Form, Input, Select } from "antd";
// Upload, message
// import { UploadOutlined } from "@ant-design/icons";
import { collection, addDoc } from "firebase/firestore";
import TextArea from "antd/es/input/TextArea";
import { db } from "../../configs/firebase";

const tags = [
	"Breakfast",
	"Brunch",
	"Lunch",
	"Dinner",
	"Dessert",
	"Appetizer",
	"Snack",
	"Soup",
	"Salad",
	"Main Course",
];

const props = {
	name: "file",
	// action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
	headers: {
		// authorization: "authorization-text",
	},
	onChange(info) {
		// if (info.file.status !== "uploading") {
		// 	console.log(info.file, info.fileList);
		// }
		// if (info.file.status === "done") {
		// 	message.success(`${info.file.name} file uploaded successfully`);
		// } else if (info.file.status === "error") {
		// 	message.error(`${info.file.name} file upload failed.`);
		// }
	},
};

export function AddRecipe() {
	const [form] = Form.useForm();

	const options = [];

	for (let i = 0; i < tags.length; i++) {
		options.push({
			label: tags[i],
			value: tags[i],
		});
	}

	const onFinish = async (recipe) => {
		try {
			const docRef = await addDoc(collection(db, "recipe"), {
				recipe,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<Form
			form={form}
			name="control-hooks"
			onFinish={onFinish}
			style={{ maxWidth: 600 }}
		>
			<Form.Item name="title">
				<Input type="text" placeholder="title"></Input>
			</Form.Item>
			<Form.Item name="description">
				<Input type="text" name="description" placeholder="description"></Input>
			</Form.Item>
			<Form.Item name="instructions">
				<TextArea placeholder="instructions" />
			</Form.Item>
			<Form.Item name="tags">
				<Select
					mode="multiple"
					allowClear
					style={{ width: "100%" }}
					placeholder="Please select tags"
					options={options}
				/>
			</Form.Item>
			{/* <Upload {...props}>
				<Button icon={<UploadOutlined />}>Select image</Button>
			</Upload> */}
			<Button htmlType="submit">Add Recipe</Button>
		</Form>
	);
}
