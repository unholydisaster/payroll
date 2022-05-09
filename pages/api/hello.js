import { Employed } from "../employees"

export default function handler(req, res) {
const {method}=req;
if(method==="GET"){
    return res.status(200).json(Employed)
}

if(method === "POST"){
  const {body}=req;
  Employed.push({ ...body, id:Employed.length +1});
  return res.status(200).json(Employed);
}
}
