import {Input} from "@/components/ui/input.tsx"
import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import useViewModel from "./InsertCompanyPageViewModel.ts"
import {Textarea} from "@/components/ui/textarea.tsx";

export const InsertCompanyPage = () => {
    const {
        nameRef,
        descRef,
        picRef,
        locRef,
        handleSubmit,
    } = useViewModel()

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Insert Company</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Name" ref={nameRef} type="text"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="picture">Picture</Label>
                                <Input id="picture" type="file" className="cursor-pointer" ref={picRef}/>
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="description">Description</Label>
                                <Textarea placeholder="Type your description here." ref={descRef} id="message"/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Location</Label>
                                <Input id="password" placeholder="Password" ref={locRef} type="text"/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-row-reverse">
                    <Button onClick={handleSubmit}>Insert</Button>
                </CardFooter>
            </Card>
        </div>
    )
}