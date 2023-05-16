import { adidas } from "../../data/adidas_data";

export default function handler(req, res) {
    const { productId } = req.query;
   
    if (productId == "men") {
        const singleData = adidas.filter((data) => (data.gender == productId));

        res.status(200).json(singleData)
    } else if (productId == "women") {
         const singleData = adidas.filter((data) => (data.gender == productId));

        res.status(200).json(singleData)
    } else if (productId == "kids") {
         const singleData = adidas.filter((data) => (data.gender == productId));

        res.status(200).json(singleData)
    } else if (productId == "items") {
        res.status(200).json(adidas)
    } else {
         const singleData = adidas.find((data) => (data.id) == parseInt(productId));

    res.status(200).json(singleData)
    }

   

    
}