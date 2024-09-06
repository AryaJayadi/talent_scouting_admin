import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import useViewModel from "@/presentation/company/InsertCompanyBulkPageViewModel.ts"

export const InsertCompanyBulkPage = () => {
    const {
        fileRef,
    } = useViewModel();
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Insert Company Bulk</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="picture">Picture</Label>
                                <Input id="picture" type="file" className="cursor-pointer" ref={fileRef}/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-row-reverse">
                <Button onClick={() => {console.log("test")}}>Insert</Button>
                </CardFooter>
            </Card>
        </div>
    )
}