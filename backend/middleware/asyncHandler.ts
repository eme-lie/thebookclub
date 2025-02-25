import { Request, Response, NextFunction, RequestHandler } from 'express';


const asyncHandler = (fn: RequestHandler): RequestHandler => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;



{/*const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;*/}
