function header(){
return (
    <div>
        <h1>
            TO-DO list
        </h1>
        {/* <Text value = {input} /> */}
        <button>Add</button>
        <Tasks>
            <TaskCount>
                <b>
                    Pending Tasks
                </b>
            </TaskCount>
            <TaskCount><b>Completed Tasks</b></TaskCount>
            
        </Tasks>
    </div>
)
}
export default header