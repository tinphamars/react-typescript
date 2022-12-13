import { useTransition, useState } from "react";

interface ITransitionReactHookProps {}

const TransitionReactHook: React.FunctionComponent<
  ITransitionReactHookProps
> = (props) => {
  const NUMBER_LIST: number = 2700;
  const [isPending, startTransition] = useTransition();

  const [useName, setUserName] = useState<string>("");
  const [listUser, setListUser] = useState<string[]>([]);

  const handleSetUserName = (e: React.FormEvent<HTMLInputElement>): void => {
    let list: string[] = [];
    setUserName(e.currentTarget.value);

    startTransition(() => {
      for (let index: number = 0; index < NUMBER_LIST; index++) {
        list.push(e.currentTarget.value);
      }
    });

    setListUser(list);
  };

  return (
    <>
      <h1>Transition in react hook</h1>
      <input type="text" value={useName} onChange={handleSetUserName} />
      <ul
        style={{
          height: "400px",
          width: "300px",
          fontSize: "13px",
          overflowX: "auto",
        }}
      >
        {isPending
          ? "Loading ..."
          : listUser.map((item: string, index: number) => (
              <li
                style={{
                  fontSize: "16px",
                  listStyle: "none",
                  padding: "10px",
                }}
                key={index}
              >
                {item}
              </li>
            ))}
      </ul>
    </>
  );
};

export default TransitionReactHook;
