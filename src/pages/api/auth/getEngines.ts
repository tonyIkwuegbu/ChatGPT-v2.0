import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";

type Option = {
	value: string;
	label: string;
};
type Data = {
	modelOptions: Option[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const models = await openai.listModels().then((res) => res.data.data);
	const modelOptions = models.map((model) => ({
		value: model.id,
		label: model.id,
	}));
	res.status(200).json({
		modelOptions,
	});
}

// import { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";

// type Option = {
// 	value: string;
// 	label: string;
// };

// type Data = {
// 	modelOptions: Option[];
// };

// const configuration = new Configuration({
// 	apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse<Data>,
// ) {
// 	const models = await openai.listModels().then((res) => res.data.data);
// 	const modelOptions = models.map((model) => ({
// 		value: model.id,
// 		label: model.id,
// 	}));
// 	res.status(200).json({
// 		modelOptions,
// 	});
// }
