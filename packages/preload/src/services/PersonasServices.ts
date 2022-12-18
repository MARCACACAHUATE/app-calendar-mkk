import { Equal } from "typeorm";
import { AppDataSource } from "../dataSource";
import { Personas } from "../models/personas";


export async function CreatePersona(data: Personas | string){
    const personaRepository = AppDataSource.getRepository(Personas);
    const persona = new Personas();

    if(typeof data == "string") {
        persona.email = data;
        persona.name = "";

    }else{
        persona.email = data.email;
        persona.name = data.name;
    }
    
    await personaRepository.save(persona);

    return persona;
}


export async function Create_or_get_persona(email: string) {
    const personaRepository = AppDataSource.getRepository(Personas);
    let persona: Personas;

    // verificamos si el email ya existe
    try {
        // si ya existe la devolvemos
        persona = await personaRepository.findOneByOrFail({
            email: Equal(email)
        });

    }catch(error){
        // si no existe lo creamos
        await CreatePersona(email);
        persona = await personaRepository.findOneByOrFail({
            email: Equal(email)
        });
    }

    return persona;
}
