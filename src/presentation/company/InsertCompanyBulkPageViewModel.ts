import {useRef} from "react";

export default function InsertCompanyBulkPageViewModel() {
    const fileRef = useRef<HTMLInputElement | null>(null);

    return {
        fileRef,
    }
}