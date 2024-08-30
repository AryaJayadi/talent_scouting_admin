import {useRef} from "react";

export default function InsertCompanyPageViewModel() {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const descRef = useRef<HTMLTextAreaElement | null>(null);
    const picRef = useRef<HTMLInputElement | null>(null);
    const locRef = useRef<HTMLInputElement | null>(null);

    async function handleSubmit() {

    }

    return {
        nameRef,
        descRef,
        picRef,
        locRef,
        handleSubmit,
    }
}