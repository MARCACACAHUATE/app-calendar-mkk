import React from "react";
import { TaskCreationForm } from './TaskCreationForm';


function CreateTareaContainer() {
    return (
        <div className="bg-indigo-800 w-[40rem] rounded-lg p-5 fixed flex justify-center">
            <TaskCreationForm />
        </div>
    );
}

export { CreateTareaContainer }
