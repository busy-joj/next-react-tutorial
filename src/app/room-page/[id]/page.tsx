export default function RoomPage(props) {
    return (
        <>
            <h1 className="px-[60px] py-[120px] text-center">
                <div>Room page</div>
                {props.params.id}
            </h1>
        </>
    )
}
