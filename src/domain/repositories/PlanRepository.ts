import type { Response } from "../../utils/Response";
import type { Planes } from "../entities/Planes";

export interface PlanRepository {
    findAll():Promise<Response<Planes>>;
}