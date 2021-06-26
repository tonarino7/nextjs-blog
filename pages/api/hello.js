// export default function handler(req, res) {
//   res.status(200).json({ text: 'Hello' })
// }

const handler = (req, res) => {
  res.status(200).json({ text: 'hello' })
}

export default handler
//べからず集
//getStaticPropsとgetStaticPathsのなかでapiを実行すべきではない
//この2つは中でサーバーサイドとの通信をしているからs
