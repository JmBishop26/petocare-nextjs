
export const inputFields=(rooms)=>[
    { id: 1, tag: "input", type: "text", label: "Full Name", name: "name" },
    { id: 2, tag: "input", type: "email", label:  "Email", name: "email" },
    { id: 3, tag: "input", type: "number", label: "Mobile Number", name: "number" },
    { id: 4, tag: "input", type: "text", label: "Pet Name", name: "petName" },
    { id: 5, tag: "select", type: "",  label: "Pet Size", name: "petSz",
        options: [
            {key: 's', value: 'small', text: 'Small' },
            {key: 'm', value: 'medium', text: 'Medium' },
            {key: 'l', value: 'large', text: 'Large' },
        ]
    },
    { id: 6, tag: "select", type: "", label: "Room Number" , name: "roomNum",
        options: rooms.map((item, index)=>(
            {key: index, value: item._id, text: item.name }
        ))
    },

    { id: 7, tag: "input", type: "datetime-local", label: "Check-In Date and Time", name: "cIN" },
    { id: 8, tag: "input", type: "datetime-local", label: "Check-Out Date and Time", name: "cOUT" },
]