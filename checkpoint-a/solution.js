// Checkpoint A: my solution

import { findOrderById, findAllOrders } from "./orders-db.js";

export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "cancelled"
  );
}

export function summarize(orders) {
  return orders.reduce((max, order) => (order.price > max ? order.price : max), 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

export function toJsonLines(orders) {
  const trimmed = orders.map((order) => ({
    student: order.student,
    item: order.item,
  }));
  return JSON.stringify(trimmed);
}
