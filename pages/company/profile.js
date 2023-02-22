import { Input, Spacer, Table, Dropdown, Link, Textarea } from "@nextui-org/react";
import React from "react";

export default function profile() {
  const [selectedNum, setSelectedNum] = React.useState("2");
  console.log(selectedNum);
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  return (
    <>
      <Spacer y={5} />
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows}>
          {(item) => (
            <Table.Row key={item.key}>
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>

        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={selectedNum}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
      <Dropdown>
        <Dropdown.Button flat>number of show entries:</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions" selectedKeys={selectedNum} onAction={setSelectedNum} >
          <Dropdown.Item key="1">1</Dropdown.Item>
          <Dropdown.Item key="2">2</Dropdown.Item>
          <Dropdown.Item key="3">3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
