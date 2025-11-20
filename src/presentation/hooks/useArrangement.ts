import { useEffect, useState } from "react";
import type { PlanRepository } from "../../domain/repositories/PlanRepository";
import { FetchPlanRepository } from "../../infraestructure/FetchPlanRepository";
import type { Planes } from "../../domain/entities/Planes";
import type { Response } from "../../utils/Response";

const useArrangement = () => {
    const planes: PlanRepository = new FetchPlanRepository();
    const [response, setResponse] = useState<Response<Planes>>({data: null, ok: false});
    
    useEffect(()=>{
        planes.findAll()
            .then(item=> setResponse(item))
            .catch(item=> setResponse(item));
    },[]);
    
    return {
        response
    }
}

export { useArrangement };
