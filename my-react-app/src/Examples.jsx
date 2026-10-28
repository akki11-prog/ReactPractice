
export default function TabContent(item){
    return (
        <div className="tab-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <pre>
                <code>{item.code}</code>
            </pre>
        </div>
    );
}