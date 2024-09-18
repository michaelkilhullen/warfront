import { DialogContent } from "@mui/material";
import { Car } from "../types";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

type DialogFormProps = {
    car: Car;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        void;
}

function CarDialogContent({ car, handleChange }: DialogFormProps) {
    return (
        <DialogContent>
            <Stack spacing={2} mt={1}>
                <TextField label="Brand" name="brand"
                    value={car.brand} onChange={handleChange} /><br />
                <TextField label="Model" name="model"
                    value={car.model} onChange={handleChange} /><br />
                <TextField label="Color" name="color"
                    value={car.color} onChange={handleChange} /><br />
                <TextField label="Year" name="modelYear"
                    value={car.modelYear} onChange={handleChange} /><br />
                <TextField label="Reg.nr" name="registrationNumber"
                    value={car.registrationNumber} onChange={handleChange} /><br />
                <TextField label="Price" name="price"
                    value={car.price} onChange={handleChange} /><br />
            </Stack>
        </DialogContent>
    )
};

export default CarDialogContent;