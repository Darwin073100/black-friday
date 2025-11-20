import type { Planes } from "../domain/entities/Planes";
import type { PlanRepository } from "../domain/repositories/PlanRepository";
import type { Response } from "../utils/Response";

export class FetchPlanRepository implements PlanRepository {
    async findAll(): Promise<Response<Planes>> {
        try {
            // const response = await fetch('http://localhost:3000/api/v1/planesh');
            const response = await fetch('https://black-friday-api.onrender.com/api/v1/planes');
            const json = await response.json() as Planes;
            return {
                ok: true,
                data: json
            }
        } catch (error) {
            return {ok: false, data: null}
        }
    }
}