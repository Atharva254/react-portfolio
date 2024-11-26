import {useState} from "react";
import {data} from "./AccordionData.ts";
import './styles.css'

function Accordion() {
    const [multiSelectionEnabled, setMultiSelectionEnabled] = useState(false);

    const [selected, setSelected] = useState<number | undefined>();
    const [multiSelected, setMultiSelected] = useState<number[]>([]);

    function handleSingleSelection(currentId: number) {
        setSelected(currentId === selected ? undefined : currentId);
    }

    function handleMultiSelection(currentId: number) {
        const copyMultiSelected = [...multiSelected]
        const indexOfCurrentId = copyMultiSelected.indexOf(currentId);
        if (indexOfCurrentId === -1) {
            copyMultiSelected.push(currentId);
        } else {
            copyMultiSelected.splice(indexOfCurrentId, 1);
        }
        setMultiSelected(copyMultiSelected.sort());
    }

    function toggleMultiSelection() {
        setMultiSelectionEnabled((prevState) => {
            if (prevState) {
                //Switching from multi to single mode
                if (multiSelected.length > 0) {
                    setSelected(multiSelected[0]);
                }
                setMultiSelected([])
            } else {
                if (selected != undefined) {
                    setMultiSelected([selected]);
                }
                setSelected(undefined);
            }
            return !prevState;
        });
    }

    function renderAnswer(id: number) {
        if (multiSelectionEnabled) {
            return multiSelected.indexOf(id) !== -1;
        } else {
            return selected === id;
        }
    }

    function isLink(answer: string) {
        return answer.startsWith("http")
    }

    return (
        <div className="wrapper">
            <button key='multiSelectionButton' onClick={toggleMultiSelection}
                    className="multiSelectionButton">{multiSelectionEnabled ? "Disable" : "Enable"} multi selection
            </button>
            <div key='accordion' className="accordion">
                {
                    data && data.length > 0 ?
                        data.map(item => <div key={'item' + item.id} className="item">
                            <div key={'title' + item.id}
                                 onClick={() => (multiSelectionEnabled ? handleMultiSelection(item.id) : handleSingleSelection(item.id))}
                                 className="title">
                                <h3 key={'question' + item.id}>{item.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                renderAnswer(item.id) ?
                                    isLink(item.answer) ? <a href={item.answer}>{item.answer}</a> :
                                        <div key={'answer' + item.id} className={'content'}>{item.answer}</div> : null
                            }
                        </div>)
                        : <div>No item found</div>
                }
            </div>
        </div>
    );
}

export default Accordion;