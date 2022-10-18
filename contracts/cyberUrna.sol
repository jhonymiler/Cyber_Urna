pragma solidity >=0.8.0 <0.9.0;

// SPDX-License-Identifier: GPL-3.0
contract Urna {
    struct Presidenciavel {
        string nome;
        uint256 qtdVotos;
    }

    Presidenciavel[] public presidenciaveis;
    mapping(address => bool) public eleitor;
    mapping(address => bool) public sacou;

    event TransferReceived(address _from, uint256 _amount);
    event TransferSent(address _from, address _destAddr, uint256 _amount);

    uint256 public Saldo;
    uint256 public LimiteSaque = 60000;

    receive() external payable {
        Saldo += msg.value;
        emit TransferReceived(msg.sender, msg.value);
    }

    constructor(string[] memory _nomePresidenciavel) {
        uint256 Qtd = _nomePresidenciavel.length;
        for (uint256 i = 0; i < Qtd; i++) {
            presidenciaveis.push(
                Presidenciavel({nome: _nomePresidenciavel[i], qtdVotos: 0})
            );
        }
    }

    function deposito() public payable {
        Saldo += msg.value;
    }

    function Votar(uint256 _id) public {
        require(!eleitor[msg.sender], "Eleitor ja votou!");
        presidenciaveis[_id].qtdVotos = presidenciaveis[_id].qtdVotos + 1;
        eleitor[msg.sender] = true;
    }

    function Saque() public {
        address payable to = payable(msg.sender);
        require(Saldo > LimiteSaque, "Nao ha mais saldo!");
        require(!sacou[msg.sender], "Ja sacou, nao pode mais...");

        Saldo -= LimiteSaque;
        to.transfer(LimiteSaque);
        sacou[msg.sender] = true;
    }
}
