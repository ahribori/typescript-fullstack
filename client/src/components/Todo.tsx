import * as React from 'react';

interface IProps {
    className?: string;
    style?: React.CSSProperties;
    title: string;
}

interface IState {
    renderedAt: Date;
}

export default class Todo extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            renderedAt: new Date(),
        };
    }

    public render() {
        const { title } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <p>{this.state.renderedAt.toString()}</p>
            </div>
        );
    }
}
