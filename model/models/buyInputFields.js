
export const buyInputFields=[
    { id: 1, tag: "input", type: "text", label: "Full Name", name: "name" },
    { id: 2, tag: "input", type: "email", label:  "Email", name: "email" },
    { id: 3, tag: "input", type: "number", label: "Mobile Number", name: "number" },
    { id: 4, tag: "input", type: "text", label: "Address", name: "address" },
    { id: 5, tag: "input", type: "number",  label: "Quantity", name: "quantity", minValue: 1},
    { id: 6, tag: "select", type: "", label: "Payment Options" , name: "payOpts",
        options: [
            {key: 1, value: 'cod', text: 'Cash on Delivery' },
            {key: 2, value: 'gcash', text: 'GCash' },
        ]
    }
]