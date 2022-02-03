import mongoose from 'mongoose';


const employeeSchema = mongoose.Schema({

    fullname: String,
    cin: Number,
    address: String,
    poste: [{
		{"agent"},{"cadre"},{"ceo"}
    }],

    entreprise: {
        type: mongoose.Types.ObjectId,
        ref: "entrepriseMessage"
    }
})


var EmployeeMessage = mongoose.model('EmployeeMessage', employeeSchema);

export default EmployeeMessage;