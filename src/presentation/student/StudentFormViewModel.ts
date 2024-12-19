import {useState} from "react";

interface  Props {
    onSubmit: () => void;
}

export default function StudentFormViewModel(p: Props) {

    function handleSubmit() {
        p.onSubmit()
    }

    return {
        handleSubmit,
    }
}