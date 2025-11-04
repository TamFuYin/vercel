export default function handler(req, res) {
  const now = new Date();
  res.status(200).json({
    time: now.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })
  });
}
