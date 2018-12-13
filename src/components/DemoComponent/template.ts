interface DemoComponentTemplateData {

}

export default (render: Function, data: DemoComponentTemplateData) => {
    return render`
        <style></style>
        <div>
            <marquee>Let's get that party started 💃🕺 Whoop whoop 🙌</marquee>
        </div>
    `;
}
