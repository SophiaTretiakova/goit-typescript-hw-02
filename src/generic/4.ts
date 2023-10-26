/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component {
  constructor(public props: any) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
