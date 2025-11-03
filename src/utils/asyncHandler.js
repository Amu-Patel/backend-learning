const asyncHandler=(requestHandler)=>{ //(promises) high order is a function= is a function which can treat as a variable and a return function.
    (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((err)=>next(err))
    }
    
}

export {asyncHandler}


// const asyncHandler=(fn)=>async(req, res, next)=>{
//     try {
//         await fn(req,res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
        
//     }
// }