{ // 型エイリアス (特定の型に別名を設定する)
    type FooType = [ string, number, boolean ];
    let data: FooType = ['abc', 'xyz', true]; // Type 'string' is not assignable to type 'number'.
}

{ // 共有型でも可能
    type HogeType = number | boolean;
    let data: HogeType = 1;
    data = false;
    console.log(data);
}
// インターフェイスでできることを型エイリアスで行うべきではない
// - エラーメッセージにエイリアス名は表示されない
// - 継承、実装とした用途には利用できない

// 型エイリアスを、共用型 タプル型以外で利用したくなったら、「本当にインターフェイスで実現できないのか」を立ち止まって再考
