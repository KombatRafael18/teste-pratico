import { Request, Response } from "express";
import { dogP, dogG, Data } from'./../index';


async function Petshop(req: Request, res: Response): Promise<void> {
  const dogPequeno: number = dogP;
  const dogGrande: number = dogG;
  const data: number = Data;
  const dia = new Date(data);
  const diaDaSemana = dia.getDay();
  const ehFinalDeSemana = diaDaSemana === 5 || diaDaSemana === 6;

  const meuCaninoFeliz = (): number => {
      let MCF: number;
      if (!ehFinalDeSemana) {
          MCF = (20 * dogPequeno) + (40 * dogGrande);
      } else {
          MCF = ((20 * dogPequeno) + (40 * dogGrande)) * 1.2;
      }
      return MCF;
  };

  const vaiRex = (): number => {
      let VR: number;
      if (!ehFinalDeSemana) {
          VR = (15 * dogPequeno) + (50 * dogGrande);
      } else {
          VR = (20 * dogPequeno) + (55 * dogGrande);
      }
      return VR;
  };

  const chowChawgas = (): number => {
      return (30 * dogPequeno) + (45 * dogGrande);
  };

  const comparacao = (): string => {

      const MCF: number = meuCaninoFeliz();
      const VR: number = vaiRex();
      const CC: number = chowChawgas();

      if (MCF < VR && MCF < CC) {
          return `Meu Canino Feliz é a melhor opção saindo no preço de ${MCF}`;
      } else if (VR < MCF && VR < CC) {
          return `Vai Rex é a melhor opção saindo no preço de ${VR}`;
      } else if (CC < MCF && CC < VR) {
          return `Chow Chawgas é a melhor opção saindo no preço de ${CC}`;
      } else if (MCF === VR && MCF < CC) {
          return `Meu Canino Feliz e Vai Rex têm o mesmo preço de ${VR}, porém Vai Rex fica mais perto`;
      } else if (MCF === CC && MCF < VR) {
          return `Meu Canino Feliz e Chow Chawgas têm o mesmo preço de ${CC}, porém Chow Chawgas fica mais perto`;
      } else if (VR === CC && CC < MCF) {
          return `Vai Rex e Chow Chawgas têm o mesmo preço de ${CC}, porém Chow Chawgas fica mais perto`;
      } else {
          return `Todos os petshops têm o mesmo preço de ${CC}, porém Chow Chawgas fica mais perto`;
      }
  };

  res.send(comparacao());
}

export default Petshop;
