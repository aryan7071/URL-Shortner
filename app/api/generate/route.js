import clientPromise from "@/lib/mongodb"



export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db=client.db("bitlink")
    const collection = db.collection("url")


    //check if shorturl exist 
    const doc = await collection.findOne({shorturl:body.shorturl})
    if(doc){
      return Response.json({succes: false, error:true ,  message: 'URL Already Exist!' })
    }



    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })




  return Response.json({succes: true , error:false ,  message: 'URL Generated Succesfully' })
}